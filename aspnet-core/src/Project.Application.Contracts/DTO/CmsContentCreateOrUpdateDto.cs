using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Project.DTO
{
    public class CmsContentCreateOrUpdateDto
    {
        [MaxLength(50)]
        public string Title { get; set; }
        [MaxLength(5000)]
        public string HtmlContent { get; set; }
    }
}
