using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace Project.Entities
{
    public class CmsContent : FullAuditedEntity<Guid>
    {
        public string Title { get; set; }
        public string HtmlContent { get; set; }

        public CmsContent()
        {

        }

        public CmsContent(string title, string htmlContent)
        {
            Title = title;
            HtmlContent = htmlContent;
        }
    }
}
