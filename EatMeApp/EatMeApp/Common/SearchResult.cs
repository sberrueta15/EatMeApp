using EatMeApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EatMeApp.Common
{
    public class SearchResult<TEntity> where TEntity : BaseEntity
    {
        public int totalSet { get; set; }
        public int totalResults { get; set; }
        public IEnumerable<TEntity> results { get; set; }
    }
}