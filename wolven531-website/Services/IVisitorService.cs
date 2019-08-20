using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace wolven531_website.Services
{
    public interface IVisitorService
    {
        void RegisterVisitor(string visitorName);

        IReadOnlyDictionary<string, int> GetVisitorMap();
    }
}
