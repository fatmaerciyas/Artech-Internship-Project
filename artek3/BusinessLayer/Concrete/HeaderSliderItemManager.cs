﻿using DataAccessLayer.Abstract;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Concrete
{
    public class HeaderSliderItemManager : GenericManager<HeaderSliderItem>
    {
        public HeaderSliderItemManager(IGenericRepository<HeaderSliderItem> genericDal) : base(genericDal)
        {
        }
    }
}
