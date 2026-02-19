<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ModuleResource\Pages;
use App\Models\Module;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ModuleResource extends Resource
{
    protected static ?string $model = Module::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Module Informatie')
                    ->schema([
                        Forms\Components\TextInput::make('module_title')
                            ->label('Titel')
                            ->required()
                            ->maxLength(255),

                        Forms\Components\TextInput::make('module_number')
                            ->label('Module Nummer')
                            ->required()
                            ->maxLength(255),

                        Forms\Components\Select::make('year')
                            ->label('Leerjaar')
                            ->options([
                                1 => 'Leerjaar 1',
                                2 => 'Leerjaar 2',
                                3 => 'Leerjaar 3',
                                4 => 'Leerjaar 4',
                            ])
                            ->required(),

                        Forms\Components\TextInput::make('icon')
                            ->label('Icoon (Emoji)')
                            ->default('💻')      // <--- defautl value
                            ->required()         // <--- verplicht invullen of revert naar default state icon
                            ->maxLength(10),

                        Forms\Components\Toggle::make('inverted')
                            ->label('Omgekeerde kleuren?'),

                        Forms\Components\Textarea::make('description')
                            ->label('Beschrijving')
                            ->required()
                            ->columnSpanFull(),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('year')
                    ->label('Leerjaar')
                    ->formatStateUsing(fn(string $state): string => "Leerjaar {$state}")
                    ->sortable(),
                Tables\Columns\TextColumn::make('module_title')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('module_number'),
                Tables\Columns\TextColumn::make('icon'),
                Tables\Columns\IconColumn::make('inverted')
                    ->boolean(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListModules::route('/'),
            'create' => Pages\CreateModule::route('/create'),
            'edit' => Pages\EditModule::route('/{record}/edit'),
        ];
    }
}