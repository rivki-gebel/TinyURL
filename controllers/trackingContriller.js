import LinkController from "./linkCntroller.js";


 const trackingController = {
    getClicksByTarget: async (req, res) => { // פונקציה חדשה לפילוח קליקים לפי מקורות
        try {
            const linkId = req.params.id;
            const link = await LinkController.getLinkById(linkId);
          if (!link) {
            return res.status(404).send('Link not found');
          }
    
          const clicksByTarget = link.clicks.reduce((acc, click) => {
            const targetValue = click.targetParamValue || "unknown";
            if (!acc[targetValue]) {
              acc[targetValue] = 0;
            }
            acc[targetValue]++;
            return acc;
          }, {});
    
          res.json({ clicksByTarget });
        } catch (e) {
          res.status(400).json({ message: e.message });
        }
      }

}
export default trackingController;
