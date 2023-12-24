import express from "express";
import cors from "cors";
import os from "node:os";
import 'dotenv/config';
import chalk from "chalk";
import mongoose from 'mongoose';
import Agenda from "agenda";
import { default as fsWithCallbacks } from 'fs'
const fsPromise = fsWithCallbacks.promises
import util from 'util';
import { default as child_process } from 'child_process'
const exec = util.promisify(child_process.exec);

const app = express();
const { Schema } = mongoose;
const MONGO_DB_URL = process.env.MONGO_DB_URL || 'mongodb://127.0.0.1/ipTV';
mongoose.connect(MONGO_DB_URL)
  .then(() => console.log('Connected!'));

const IpLog = mongoose.model('ipLog', new Schema({ ip: String, created_at: Date }));
const agenda = new Agenda({ db: { address: MONGO_DB_URL } });

app.use(express.urlencoded({ extended: true }));
import fs from "fs";
app.use(express.json());
const PORT = process.env.PORT || 3500;
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


if (!fs.existsSync("channel.db")) {
  fs["writeFileSync"]("./channel.db", '{"channel": {}}');
}

if (!fs.existsSync("channel-catchup.db")) {
  fs["writeFileSync"]("./channel-catchup.db", '{"channel": {}}');
}


app.get("/7200300828", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});


app.use(cors());

import loginRoute from "./routes/login.mjs";
import ipRoute from "./routes/ip.mjs";
import channelsRoute from "./routes/channel.mjs";
import playlistRoute from "./routes/playlist.mjs";
import catchulRoute from "./routes/catchup/index.mjs";

app.use("/", loginRoute);
app.use("/", ipRoute);
app.use("/", channelsRoute);
app.use("/", playlistRoute);
app.use("/catchup", catchulRoute);

// app.use(express.static(path.join(__dirname, "public")));
app.get("/favicon.ico", (req, res) => {
  return res.sendFile(path.join(__dirname + "/public/favicon.ico"));
});
import { handler } from "./build/handler.js";

app.use(handler);

agenda.define("update_ip", async () => {
  fetch("https://ipecho.io/json")
    .then((response) => response.json())
    .then(async (data) => {
      let current_ip = data.ip;
      let latest_record = await IpLog.findOne().sort({ created_at: -1 }).lean();
      if (current_ip != latest_record.ip) {
        await exec('git pull')
        let save_ip = await new IpLog({ ip: data.ip, created_at: Date.now() }).save();
        let m3u = await fsPromise.readFile("index.html", "utf8");
        m3u = m3u.replaceAll(latest_record.ip, current_ip);
        await fs.writeFileSync('index.html', m3u, { encoding: 'utf8', flag: 'w' })
        const { stdout, stderr } = await exec('git add index.html && git commit -m "auto commit" && git push');
        console.log(stdout)
      }
    });
});

(async function () {
  // IIFE to give access to async/await
  await agenda.start();

  await agenda.every("5 minutes", "update_ip");
})();


app.listen(PORT, "0.0.0.0", async () => {
  let r
  try {
    r = await fetch("https://api.github.com/repos/dhruv-2015/JIOTVServer/releases/latest");
    r = await r.json();
    r = r['tag_name']
  } catch (error) {

  }
  console.log(
    "==================================================================="
  );
  console.log(
    chalk.green("THIS SERVER IS 100% FREE. PLEASE DON'T PAY ANYONE.")
  );
  console.log(
    chalk.green(
      "STRICT ACTION WILL BE TAKEN AGAINST THOSE WHO ARE SELLING THIS."
    )
  );
  console.log(
    chalk.green(
      "IF ANYONE TRYING TO SELL IT, PLEASE REPORT IT ON OUR DISCORD SERVER\nhttps://discord.gg/suyzkCQKhC"
    )
  );
  console.log(
    chalk.green("Please Stare Repo https://github.com/dhruv-2015/JIOTVServer")
  );
  if (r) {
    // console.log(chalk.green("VERSION 2.8.6"));
    console.log(chalk.green(`VERSION ${r}`));
  }
  console.log(
    chalk.green(
      "980+ CHANNELS AVAILABLE. MORE FEATURES WILL COME SOON. STAY TUNED"
    )
  );
  console.log(
    "==================================================================="
  );
  console.log(
    chalk.red(
      "       __ ____ ____     ______ _    __ \n      / //  _// __ \\   /_  __/| |  / / \n __  / / / / / / / /    / /   | | / /  \n/ /_/ /_/ / / /_/ /    / /    | |/ /   \n\\____//___/ \\____/    /_/     |___/    \n                                "
    )
  );
  console.log(
    "==================================================================="
  );
  console.log(`TV server is running on port ${PORT}`);
  console.log(
    `Please open http://localhost:${PORT}/login from the host to login and get playlist if running server for the first time`
  );
  console.log(
    `Note: If hosted in a website, you may want to use the domain or its IP`
  );
  // console.log(chalk.red("need to login every 24 hours even if you are already logged in"));
  console.log("If facing any errors, please login from portal again");
  console.log("you can use server m3u8 links in other websites and apps");


});
