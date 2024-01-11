using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Project.Entities;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace Project.EntityConfiguration
{
    public class PriceMaterialHistoryConfiguration : IEntityTypeConfiguration<CmsContent>
    {
        public void Configure(EntityTypeBuilder<CmsContent> builder)
        {
            //TableName
            builder.ToTable("PROJ_CmsContent");

            //Config by Convention
            builder.ConfigureByConvention();

            //Key
            builder.HasKey(x => x.Id);

            //Properties
            builder.Property(x => x.Title);
            builder.Property(x => x.HtmlContent);
        }
    }
}