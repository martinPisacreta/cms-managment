using Microsoft.AspNetCore.Mvc;
using Project.DTO;
using Project.Interfaces;
using System;
using System.Threading.Tasks;
using Volo.Abp.AspNetCore.Mvc;

namespace Project.Controllers
{
    public class CmsContentController : AbpController
    {
        private readonly ICmsContentAppService _cmsContentService;

        public CmsContentController(ICmsContentAppService cmsContentService)
        {
            _cmsContentService = cmsContentService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync(Guid id)
        {
            var content = await _cmsContentService.GetAsync(id);
            return Ok(content);
        }

        [HttpGet]
        public async Task<IActionResult> GetListAsync()
        {
            var contents = await _cmsContentService.GetListAsync();
            return Ok(contents);
        }

        [HttpPost]
        public async Task<IActionResult> CreateAsync(CmsContentCreateOrUpdateDto input)
        {
            var content = await _cmsContentService.CreateAsync(input);
            return Ok(content);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAsync(Guid id ,CmsContentCreateOrUpdateDto input)
        {
            var content = await _cmsContentService.UpdateAsync(id,input);
            return Ok(content);
        }

      
    }
}
