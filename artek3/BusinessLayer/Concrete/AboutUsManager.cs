using BusinessLayer.Abstract;
using DataAccessLayer.Abstract;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Concrete
{
    public class AboutUsManager : GenericManager<AboutUs>
    {
        public AboutUsManager(IGenericRepository<AboutUs> genericDal) : base(genericDal)
        {
        }
    }
}
