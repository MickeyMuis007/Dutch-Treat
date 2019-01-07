using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DutchTreat.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace DutchTreat
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<IMailService, NullMailService>();
            // Support for real mail service

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/error");
            }

            app.UseStaticFiles();               // Serve static files in the wwwroot directory
            app.UseNodeModules(env);

            app.UseMvc(cfg => 
            {
                cfg.MapRoute("Default",
                    "/{controller}/{action}/{id?}",
                    new { controller = "App", Action = "Index" });
            });
        }
    }
}

/*
 * Notes:
 * There is 3 types of services you can add:
 *  - var IServiceCollection services
 *  - services.AddTransient
 *      - This is services that doesn't not of data on itself. 
 *      - This is often just methods that do things.
 *  - services.AddScoped
 *      - This services are kept a live according to the length of the connection.
 *  - services.AddSingleton
 *      - This is services the are only created once and are kept for the live time of the server being up.
 */