using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace project_angular_asp.net_Core.Models
{
    public class Make
    {
        public Make()
        {
            Models = new Collection<Model>();
        }

        public int Id { get; set; }
        public string name { get; set; }

        public ICollection<Model> Models { get; set; }
        

    }
}