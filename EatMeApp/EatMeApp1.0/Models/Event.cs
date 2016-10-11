using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EatMeApp1._0.Models
{
    public class Event : BaseEntity
    {
        //[JsonProperty("Cooker")]
        //public Cooker Cooker  { get; set; }

        [JsonProperty("Title")]
        public string Title { get; set; }

        [JsonProperty("Description")]
        public string Description { get; set; }

        [JsonProperty("FoodType")]
        public FoodType FoodType { get; set; }

        [JsonProperty("TicketPrice")]
        public double TicketPrice { get; set; }

        [JsonProperty("TotalTickets")]
        public int TotalTickets { get; set; }

        [JsonProperty("SoldTickets")]
        public int SoldTickets { get; set; }

        [JsonProperty("LocationX")]
        public double LocationX { get; set; }

        [JsonProperty("LocationY")]
        public double LocationY { get; set; }

        //[JsonProperty("Commensals")]
        //public IEnumerable<Commensal> Commensals { get; set; }
    }

    public enum FoodType
    {
        NoRestriction,
        Vegeterian,
        Vegan,
        Celiac
    }
}