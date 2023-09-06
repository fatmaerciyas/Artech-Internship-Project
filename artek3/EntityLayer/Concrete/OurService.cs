using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class OurService
    {
        [Key]
        public int Id { get; set; }
        [StringLength(1000)]
        public string OurServicesImagePaths { get; set; }
        [StringLength(10000)]
        public string OurServicesTextContent { get; set; }
        [StringLength(1000)]
        public string OurServicesTitle { get; set; }
        public DateTime UpdateTime { get; set; }
        public int userId { get; set; }
    }
}
