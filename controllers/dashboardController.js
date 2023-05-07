

const dashboardGetController = (req, res) => {
     return res.render('../views/dashboard/dashboard.ejs', {
          currentUrl: req.url
     });
}

module.exports = {
     dashboardGetController
}