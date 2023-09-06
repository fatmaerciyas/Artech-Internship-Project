using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class HeaderContent
    {
        [Key]
        public int Id { get; set; }
        [StringLength(1000)]
        public string HeaderLogoPath { get; set; }
        [StringLength(1000)]
        public string HeaderBackGroundImagePath { get; set; }
        [StringLength(300)]
        public string HeaderTitle { get; set; }
        [StringLength(500)]
        public string HeaderSubtitle { get; set; }
        public DateTime UpdateTime { get; set; }
        public int userId { get; set; }
    }
}
