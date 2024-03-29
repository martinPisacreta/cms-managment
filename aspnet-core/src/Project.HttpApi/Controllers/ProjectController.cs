﻿using Project.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Project.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class ProjectController : AbpControllerBase
{
    protected ProjectController()
    {
        LocalizationResource = typeof(ProjectResource);
    }
}
