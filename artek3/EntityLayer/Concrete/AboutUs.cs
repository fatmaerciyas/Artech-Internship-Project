using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class AboutUs
    {
        [Key]
        public int Id { get; set; }
        [StringLength(10000)]
        public string AboutUsTextContent { get; set; }
        [StringLength(1000)]
        public string AboutUsTitle { get; set; }
        [StringLength(1000)]
        public string AboutUsVideoLink { get; set; }
        public string AboutUsTextContent2 { get; set; }
        [StringLength(1000)]
        public string AboutUsTitle2 { get; set; }
        [StringLength(1000)]
        public string AboutUsVideoLink2 { get; set; }
        public string AboutUsTextContent3 { get; set; }
        [StringLength(1000)]
        public string AboutUsTitle3 { get; set; }
        [StringLength(1000)]
        public string AboutUsVideoLink3 { get; set; }
        public DateTime UpdateTime { get; set; }
        public int userId { get; set; }
    }
}
