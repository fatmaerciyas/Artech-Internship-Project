using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class OurTeam
    {
        [Key]
        public int Id { get; set; }
        [StringLength(1000)]
        public string OurTeamImagePaths { get; set; }
        public string OurTeamContent { get; set; }
        [StringLength(1000)]
        public string OurTeamTitle { get; set; }
        [StringLength(1000)]
        public string OurTeamMemberPosition { get; set; }
        public DateTime UpdateTime { get; set; }
        public int userId { get; set; }

        public string faceL { get; set; }
        public string twitterL { get; set; }
        public string instaL { get; set; }
        public string mail { get; set; }
    }
}
