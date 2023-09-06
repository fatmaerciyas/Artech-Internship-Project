using DataAccessLayer.Abstract;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Concrete
{
    public class OurTeamManager : GenericManager<OurTeam>
    {
        public OurTeamManager(IGenericRepository<OurTeam> genericDal) : base(genericDal)
        {
        }
    }
}
