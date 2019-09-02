﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace wolven531_website.Views
{
    public class AdminModel : PageModel
    {
        public void OnGet()
        {
            ViewData["Title"] = "Admin";
        }
    }
}