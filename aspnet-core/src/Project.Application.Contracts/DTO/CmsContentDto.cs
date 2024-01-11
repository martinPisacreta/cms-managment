using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace Project.DTO
{
    public class CmsContentDto : ExtensibleAuditedEntityDto<Guid>
    {
        public string Title { get; set; }
        public string HtmlContent { get; set; }
    }
}
