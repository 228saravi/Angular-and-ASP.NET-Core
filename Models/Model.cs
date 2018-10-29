using System.ComponentModel.DataAnnotations.Schema;

namespace project_angular_asp.net_Core.Models
{
    [Table("Models")]
    public class Model
    {
        public int Id { get; set; }
        public string name { get; set; }
        public Make Make { get; set; }
        public int MakeId { get; set; }
    }
}