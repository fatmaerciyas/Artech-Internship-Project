using DataAccessLayer.Abstract;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Concrete
{
    public class SliderAreaTextContentManager : GenericManager<SliderAreaTextContent>
    {
        public SliderAreaTextContentManager(IGenericRepository<SliderAreaTextContent> genericDal) : base(genericDal)
        {
        }
    }
}
