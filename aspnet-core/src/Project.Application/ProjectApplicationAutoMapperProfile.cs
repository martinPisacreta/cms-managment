using AutoMapper;
using Project.DTO;
using Project.Entities;

namespace Project;

public class ProjectApplicationAutoMapperProfile : Profile
{
    public ProjectApplicationAutoMapperProfile()
    {
        /* You can configure your AutoMapper mapping configuration here.
         * Alternatively, you can split your mapping configurations
         * into multiple profile classes for a better organization. */

        CreateMap<CmsContent, CmsContentCreateOrUpdateDto>().ReverseMap();
        CreateMap<CmsContent, CmsContentDto>().ReverseMap();
    }
}
