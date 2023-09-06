using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class SliderAreaTextContent
    {
        [Key]
        public int Id { get; set; }
        [StringLength(10000)]
        public string SliderTextContent { get; set; }
        public DateTime UpdateTime { get; set; }
        public int userId { get; set; }
    }
}
