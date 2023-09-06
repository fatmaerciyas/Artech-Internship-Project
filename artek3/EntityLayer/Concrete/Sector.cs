using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class Sector
    {

        [Key]
        public int Id { get; set; }
        [StringLength(10000)]
        public string TextContent { get; set; }
        [StringLength(1000)]
        public string Title { get; set; }
        public DateTime UpdateTime { get; set; }
        public int userId { get; set; }

    }
}
