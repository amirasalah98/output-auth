const Contact = require("../models/Contact");
const {sendEmail} = require("../utils/sendEmail");

exports.sendMessage = async (req, res) => {
  try {

    const { name, email, message } = req.body;

    // save in DB
    const newMessage = await Contact.create({
      name,
      email,
      message
    });

    // send email
    await sendEmail(name, email, message);

    res.status(200).json({
      message: "Message sent successfully",
      data: newMessage
    });

  } catch (error) {
   console.log("FULL ERROR:", error);
   res.status(500).json({
      message: "Server error",
      error: error.message
   });
}
};