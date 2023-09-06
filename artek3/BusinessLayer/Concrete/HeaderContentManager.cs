using DataAccessLayer.Abstract;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Concrete
{
    public class HeaderContentManager : GenericManager<HeaderContent>
    {
        public HeaderContentManager(IGenericRepository<HeaderContent> genericDal) : base(genericDal)
        {
        }
    }
}
