using Microsoft.AspNetCore.Mvc;
using Project.DTO;
using Project.Entities;
using Project.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.ObjectMapping;

namespace Project.Services
{
  
    public class CmsContentAppService : ProjectAppService , ICmsContentAppService
    {
        private readonly IRepository<CmsContent, Guid> _repository;

        public CmsContentAppService(IRepository<CmsContent, Guid> repository)
        {
            _repository = repository;
        }

        [ApiExplorerSettings(IgnoreApi = true)]
        public async virtual Task<CmsContentDto> GetAsync(Guid id)
        {
            var response = await _repository.FindAsync(id);

            return ObjectMapper.Map<CmsContent, CmsContentDto>(response);
        }

        public async virtual Task<PagedResultDto<CmsContentDto>> GetListAsync()
        {
            await _repository.GetListAsync();
            var count = await _repository.GetCountAsync();
            var list = await _repository.GetListAsync();

            return new PagedResultDto<CmsContentDto>(
                count,
                ObjectMapper.Map<List<CmsContent>, List<CmsContentDto>>(list)
            );
        }

        public async virtual Task<CmsContentDto> CreateAsync(CmsContentCreateOrUpdateDto input)
        {
            var entity = ObjectMapper.Map<CmsContentCreateOrUpdateDto, CmsContent>(input);
            var response = await _repository.InsertAsync(entity);

            return ObjectMapper.Map<CmsContent, CmsContentDto>(response);
        }

        public async virtual Task<CmsContentDto> UpdateAsync(Guid id , CmsContentCreateOrUpdateDto input)
        {
            var cmsContent = await _repository.FindAsync(id);
           
            ObjectMapper.Map(input, cmsContent);

            await _repository.UpdateAsync(cmsContent);


            return ObjectMapper.Map<CmsContent, CmsContentDto>(cmsContent);
        }

        
    }
}
