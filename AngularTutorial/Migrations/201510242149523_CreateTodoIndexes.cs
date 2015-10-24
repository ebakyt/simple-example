namespace AngularTutorial.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateTodoIndexes : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Todoes", "Text", c => c.String(maxLength: 800));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Todoes", "Text", c => c.String());
        }
    }
}
