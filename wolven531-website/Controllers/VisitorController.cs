using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using wolven531_website.Services;

namespace wolven531_website.Controllers
{
    [Route("api/visitors")]
    [ApiController]
    public class VisitorController : ControllerBase
    {
        private readonly IVisitorService _visitorService;
        private readonly ILogger<VisitorController> _logger;

        public VisitorController(IVisitorService visitorService, ILogger<VisitorController> logger)
        {
            _visitorService = visitorService;
            _logger = logger;
        }

        // GET: api/visitors
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return _visitorService.GetVisitorMap().Keys;
        }

        //// GET: api/Visitor/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/visitors
        [HttpPost]
        public IActionResult Post([FromBody] JObject visitor)
        {
            if (!visitor.ContainsKey("name"))
            {
                return StatusCode(
                    (int)HttpStatusCode.BadRequest,
                    new JObject { ["error"] = "Must provide a 'name' key and value in object" });
            }
            _visitorService.RegisterVisitor(visitor.GetValue("name").Value<string>());
            return StatusCode((int)HttpStatusCode.OK, new JObject { ["success"] = true });
        }

        //// PUT: api/Visitor/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
