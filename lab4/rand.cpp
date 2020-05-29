
#include <iostream>
#include <math.h>
#include <fstream>
using namespace std;

 

double DoubleRand(double _max, double _min)
    { 
    	return _min + double(rand()) / RAND_MAX * (_max - _min);
    	 }

int main()
{
	int g = 12;
	remove("cppstudio.json");
    ofstream fout("cppstudio.json"); // создаём объект класса ofstream для записи и связываем его с файлом cppstudio.txt

srand(9521);
fout << "    [\n"	;
for(int j = 0;j < g;j++){
	fout << " [ "	;

for(int i = 0;i < g;i++) {
    double b = DoubleRand(0,1);
    double c = DoubleRand(0,1);
    fout  << floor((1.0 - 2 * 0.01 - 1 * 0.005 - 0.25) * (b + c))  ;
    if( i < g - 1 ) fout  << ", " ;
    }
    fout <<" ] ";
    if( j < g - 1 ) fout  << ",\n " ;
  
}
fout <<" ] \n";
fout.close(); // закрываем файл
    system("pause");
    
return 0;
}