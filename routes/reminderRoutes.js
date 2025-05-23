const express = require("express");
const router = express.Router();
const Reminder = require("../models/Reminder");

router.post("/create", async (req, res) => {
    try {
        const { message, date, time, reminderType } = req.body;
        const newReminder = new Reminder({ message, date, time, reminderType });
        await newReminder.save();
        res.status(201).json({ success: true, data: newReminder });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
