using DataAccessLayer.Abstract;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Concrete
{
    public class SectorManager : GenericManager<Sector>
    {
        public SectorManager(IGenericRepository<Sector> genericDal) : base(genericDal)
        {
        }
    }
}
