using Volo.Abp.Modularity;

namespace Project;

[DependsOn(
    typeof(ProjectDomainModule),
    typeof(ProjectTestBaseModule)
)]
public class ProjectDomainTestModule : AbpModule
{

}
