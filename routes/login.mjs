import express from "express";
const router = express.Router();
import fs from "fs";
import { sendOtp, login } from "../utils/login.mjs";

import jdebug from '../utils/debug.mjs';

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.post("/login", async (req, res) => {
  const { mobile, otp } = req.body;
  jdebug(req.body);
  if (mobile != "" && otp == "") {
    let response = await sendOtp(mobile);
    if (response.success) {
      return res.redirect(`7200300828?otpsent=${mobile}`);
    }
    console.log(response.message);
    res.redirect(`7200300828?error=fail to send otp`);

  } else if (mobile != "" && otp != "") {
    let response = await login(mobile, otp);
    if (response.success) {
      return res.redirect("7200300828?success=true");
    }
    console.log(response.message);
    res.redirect(`7200300828?error=${response.message}`);
  } else {
    res.redirect("7200300828");
  }
});

router.get("/login", (req, res) => {
  res.redirect("login.html");
});

router.get("/isLogin", (req, res) => {
  fs["existsSync"]("tokenData.jiotv")
    ? res.status(200)["send"]({ success: !![], result: !![] })
    : res.status(200)["send"]({ success: !![], result: ![] });
});


export default router;