using Project.DTO;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Project.Interfaces
{
    public interface ICmsContentAppService : IApplicationService
    {
        Task<CmsContentDto> GetAsync(Guid id);
        Task<PagedResultDto<CmsContentDto>> GetListAsync();
        Task<CmsContentDto> CreateAsync(CmsContentCreateOrUpdateDto input);
        Task<CmsContentDto> UpdateAsync(Guid id ,CmsContentCreateOrUpdateDto input);
    }
}
