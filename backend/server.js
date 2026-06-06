const app = require("./app");

require("dotenv").config();
const cors = require("cors");

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

