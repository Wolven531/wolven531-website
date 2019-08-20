using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace wolven531_website.Services
{
    public class VisitorService : IVisitorService
    {
        private readonly ILogger<VisitorService> _logger;

        private Dictionary<string, int> visitorToHitCountMap;

        public VisitorService(ILogger<VisitorService> logger)
        {
            visitorToHitCountMap = new Dictionary<string, int>();
            _logger = logger;

            _logger.LogDebug("Initialized new in-memory visitor map.");
        }

        public void RegisterVisitor(string visitorName)
        {
            if (!visitorToHitCountMap.ContainsKey(visitorName))
            {
                _logger.LogDebug($"Registering visitor: '{visitorName}'...");
                visitorToHitCountMap.Add(visitorName, 1);
            }
            else
            {
                var visits = visitorToHitCountMap.GetValueOrDefault(visitorName);
                _logger.LogDebug($"Adding visit from visitor: '{visitorName}'; previous value={visits}...");
                visitorToHitCountMap[visitorName] += 1;
            }
        }
    }
}
