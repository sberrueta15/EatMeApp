namespace WebApplication1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Events",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        Description = c.String(),
                        FoodType = c.Int(nullable: false),
                        TicketPrice = c.Double(nullable: false),
                        TotalTickets = c.Int(nullable: false),
                        SoldTickets = c.Int(nullable: false),
                        LocationX = c.Double(nullable: false),
                        LocationY = c.Double(nullable: false),
                        DateModified = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Events");
        }
    }
}
