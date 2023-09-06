using DataAccessLayer.Abstract;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Concrete
{
    public class OurProjectManager : GenericManager<OurProject>
    {
        public OurProjectManager(IGenericRepository<OurProject> genericDal) : base(genericDal)
        {
        }
    }
}
