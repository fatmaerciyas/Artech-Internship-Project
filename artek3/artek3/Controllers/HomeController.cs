using artek3.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace artek3.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

      
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult HomePage()
        {
            return View();
        }

      
        public IActionResult Aboutus()
        {
            return View();
        }
        
        public IActionResult Ourteam()
        {
            return View();
        }
       
        public IActionResult OurteamDetail()
        {
            return View();
        }

        public IActionResult ProjectsPage(int? itemId)
        {
            return View();
        }
       
        public IActionResult Contact()
        {
            return View();
        }
       
        public IActionResult OurServices()
        {
            return View();
        }
        public IActionResult OurProjects()
        {
            return View();
        }


        //public IActionResult OurServicesDetail(VMAdmin p)
        //{
        //    ViewBag.id = p.VMAdminId;
        //    return View(p.VMAdminId);
        //}

        public IActionResult OurProjectsDetail()
        {
            return View();
        }

        public IActionResult HomePageNewsDetail()
        {
            return View();
        }


        //public IIActionResult Privacy()
        //{
        //    return View();
        //}

        //[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        //public IIActionResult Error()
        //{
        //    return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        //}
    }
}