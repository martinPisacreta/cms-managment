using Volo.Abp.Modularity;

namespace Project;

public abstract class ProjectApplicationTestBase<TStartupModule> : ProjectTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
