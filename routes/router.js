import { Router } from "express";

const CustomRouter = Router();

CustomRouter.get("/", (req, res) => {
    res.render("index");
});

CustomRouter.get("/about", (req, res) => {
    res.render("about");
});

CustomRouter.get("/contact-us", (req, res) => {
    res.render("contact-us");
});
CustomRouter.get("*", (req, res) => {
    res.status(404).render("404");
})
export default CustomRouter;