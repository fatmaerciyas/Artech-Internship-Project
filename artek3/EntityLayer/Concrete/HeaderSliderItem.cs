using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class HeaderSliderItem
    {
        [Key]
        public int Id { get; set; }
        [StringLength(1000)]
        public string SliderImagePaths { get; set; }
        public DateTime UpdateTime { get; set; }
        public int userId { get; set; }
    }
}
