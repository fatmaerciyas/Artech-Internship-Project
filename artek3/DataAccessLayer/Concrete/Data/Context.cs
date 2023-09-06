using EntityLayer.Concrete;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Concrete.Data
{
    public class Context : DbContext
    {

     
        
        //GET ConnetionString from appsettings.json --> Value cannot be null. (Parameter 'connectionString')
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {

            options.UseSqlServer("Server=LAPTOP-SUUA4BNC\\MSSQL;Database=Artek3Db;Trusted_Connection=True;");

        }

       

        public DbSet<HeaderContent> headerContents { get; set; }
        public DbSet<HeaderSliderItem> headerSliderItems { get; set; }
        public DbSet<AboutUs> aboutUs { get; set; }
        public DbSet<HomePageNew> homePageNews { get; set; }
        public DbSet<OurProject> ourProjects { get; set; }
        public DbSet<OurService> ourServices { get; set; }
        public DbSet<OurTeam> ourTeam { get; set; }
        public DbSet<Sector> sectors { get; set; }
        public DbSet<SliderAreaTextContent> sliderAreaTextContent { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    if (!optionsBuilder.IsConfigured)
        //    {
        //        IConfigurationRoot configuration = new ConfigurationBuilder()
        //           .SetBasePath((Directory.GetCurrentDirectory()))
        //           .AddJsonFile("appsettings.json")
        //           .Build();
        //        var connectionString = configuration.GetConnectionString("DefaultConnection");
        //        optionsBuilder.UseSqlServer(connectionString);
        //    }
        //}



    }
}
