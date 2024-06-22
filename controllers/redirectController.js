import LinkController from "./linkCntroller.js";

const RedirectController = {
    get: async (req, res) => {
        try {
            const linkId = req.params.id;
            const ipAddress = req.ip;
            const link = await LinkController.getLinkById(linkId);
            if (!link) {
                return res.status(404).send('Link not found');
            }

            const targetParamValue = req.query[link.targetParamName] || "";

            link.clicks.push({ ipAddress, targetParamValue });
            await link.save();

            res.redirect(link.originalUrl);
        } catch (error) {
            res.status(500).send('Server Error');
        }
    }
}
export default RedirectController;
