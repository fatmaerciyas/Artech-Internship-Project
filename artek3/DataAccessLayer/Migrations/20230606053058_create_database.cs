using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccessLayer.Migrations
{
    public partial class create_database : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "aboutUs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AboutUsTextContent = table.Column<string>(type: "nvarchar(max)", maxLength: 10000, nullable: false),
                    AboutUsTitle = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    AboutUsVideoLink = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    AboutUsTextContent2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AboutUsTitle2 = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    AboutUsVideoLink2 = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    AboutUsTextContent3 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AboutUsTitle3 = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    AboutUsVideoLink3 = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    UpdateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    userId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_aboutUs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "headerContents",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HeaderLogoPath = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    HeaderBackGroundImagePath = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    HeaderTitle = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    HeaderSubtitle = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    UpdateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    userId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_headerContents", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "headerSliderItems",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SliderImagePaths = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    UpdateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    userId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_headerSliderItems", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "homePageNews",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HomePageNewsImagePaths = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    HomePageNewsTextContent = table.Column<string>(type: "nvarchar(max)", maxLength: 10000, nullable: false),
                    HomePageNewsTitle = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    UpdateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    userId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_homePageNews", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ourProjects",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OurProjectsImagePaths = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    OurProjectsTextContent = table.Column<string>(type: "nvarchar(max)", maxLength: 10000, nullable: false),
                    OurProjectsTitle = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    UpdateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    userId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ourProjects", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ourServices",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OurServicesImagePaths = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    OurServicesTextContent = table.Column<string>(type: "nvarchar(max)", maxLength: 10000, nullable: false),
                    OurServicesTitle = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    UpdateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    userId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ourServices", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ourTeam",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OurTeamImagePaths = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    OurTeamContent = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OurTeamTitle = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    OurTeamMemberPosition = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    UpdateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    userId = table.Column<int>(type: "int", nullable: false),
                    faceL = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    twitterL = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    instaL = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    mail = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ourTeam", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "sectors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TextContent = table.Column<string>(type: "nvarchar(max)", maxLength: 10000, nullable: false),
                    Title = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    UpdateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    userId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_sectors", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "sliderAreaTextContent",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SliderTextContent = table.Column<string>(type: "nvarchar(max)", maxLength: 10000, nullable: false),
                    UpdateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    userId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_sliderAreaTextContent", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "aboutUs");

            migrationBuilder.DropTable(
                name: "headerContents");

            migrationBuilder.DropTable(
                name: "headerSliderItems");

            migrationBuilder.DropTable(
                name: "homePageNews");

            migrationBuilder.DropTable(
                name: "ourProjects");

            migrationBuilder.DropTable(
                name: "ourServices");

            migrationBuilder.DropTable(
                name: "ourTeam");

            migrationBuilder.DropTable(
                name: "sectors");

            migrationBuilder.DropTable(
                name: "sliderAreaTextContent");
        }
    }
}
