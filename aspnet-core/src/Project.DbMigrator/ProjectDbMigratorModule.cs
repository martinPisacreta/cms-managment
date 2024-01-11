using Project.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace Project.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(ProjectEntityFrameworkCoreModule),
    typeof(ProjectApplicationContractsModule)
    )]
public class ProjectDbMigratorModule : AbpModule
{
}
