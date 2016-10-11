using EatMeApp1._0.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EatMeApp1._0.Context
{
    public class EMAContext : DbContext
    {
        public EMAContext()
        {
            Database.SetInitializer<EMAContext>(new CreateDatabaseIfNotExists<EMAContext>());

        }

        
    }
}