
#include <iostream>
#include <math.h>
#include <fstream>
using namespace std;

 

double DoubleRand(double _max, double _min)

    { return _min + double(rand()) / RAND_MAX * (_max - _min); }

int main()
{
    ofstream fout("cppstudio.txt"); // создаём объект класса ofstream для записи и связываем его с файлом cppstudio.txt

srand(9521);
for(int j = 0;j < 12;j++){
fout << " ["	;
for(int i = 0;i < 12;i++) {
    double b = DoubleRand(0,1);
    double c = DoubleRand(0,1);
    fout <<" [" << floor((1.0 - 2 * 0.02 - 1 * 0.005 - 0.25) * (b + c))  << "],";
    }
fout <<" ], \n";    
}

fout.close(); // закрываем файл
    system("pause");
    
return 0;
}